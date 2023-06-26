import crypto from "crypto";

class MarvelHelper {
  genCredentials(): MarvelCredentials {
    const privateKey = process.env.MARVEL_PRIVATE_KEY!;
    const publicKey = process.env.MARVEL_PUBLIC_KEY!;

    const ts = Date.now().toString();
    const hash = crypto
      .createHash("md5")
      .update(ts + privateKey + publicKey)
      .digest("hex");

    return { publicKey, ts, hash };
  }

  async getCharacterById(id: number): Promise<MarvelApiResponse> {
    const { publicKey, ts, hash } = this.genCredentials();

    let url = `https://gateway.marvel.com/v1/public/characters/${id}`;
    url = url + `?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    const res = await fetch(url, { method: "GET" });
    const data = await res.json();
    console.log("url -> ", url);
    console.log("data -> ", data);
    return data;
  }

  async getListOfCharacters({
    limit,
    offset,
    characterName,
  }: {
    limit: number;
    offset: number;
    characterName?: string;
  }): Promise<MarvelApiResponse> {
    const { publicKey, ts, hash } = this.genCredentials();

    let url = "https://gateway.marvel.com/v1/public/characters";
    url =
      url +
      `?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

    if (characterName) {
      url = url + `&name=${characterName}`;
    }

    const res = await fetch(url, { method: "GET" });

    const data = await res.json();

    console.log("url -> ", url);
    console.log("data -> ", data.code);
    return { ...data };
  }
}

export default MarvelHelper;
