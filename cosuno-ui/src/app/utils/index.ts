export const wait = async (ms = 0) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  })
}
