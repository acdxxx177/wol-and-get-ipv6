import wol from "wol";
import hostIpStore from "@root/utils/store/hostIpStore";
import type { HostList } from "../hostList";
import { hostList } from "../hostList";

export default class CreatWol {
  private hostList: HostList[];

  constructor() {
    this.hostList = hostList;
  }

  public async wakeUp(hostname: string): Promise<boolean> {
    const host = this.hostList.find((host) => host.hostname === hostname);
    if (!host) {
      throw new Error("Host not found");
    }
    const result = await wol.wake(host.mac, { address: host.ip });
    if (result) {
      hostIpStore().setData(hostname, []);
      return true;
    }
    return false;
  }
}
