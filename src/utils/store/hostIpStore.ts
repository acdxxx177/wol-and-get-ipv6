import MemoryStore from "@root/utils/MemoryStore";
let hostIpStore: MemoryStore<string[]>;

export default (): MemoryStore<string[]> => {
  if (!hostIpStore) {
    hostIpStore = new MemoryStore<string[]>();
  }
  return hostIpStore;
};
