import ping from "ping";
export default class CreatPing {
  private timeout: number = 5;
  public async ping(host: string | undefined): Promise<boolean> {
    if (!host) {
      throw new Error("host is undefined");
    }
    const result = await ping.promise.probe(host, { timeout: this.timeout });
    return result.alive;
  }
}
