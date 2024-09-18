import { Body } from "caido:utils";

function generateOTPs(sdk, fromNumber, toNumber) {
  sdk.console.log(new Body(`Generating OTPs from ${fromNumber} to ${toNumber}`));
  
  let otps = '';
  for (let i = fromNumber; i <= toNumber; i++) {
    otps += i + '\n';
  }

  return { returns: otps.trim() };
}

export function init(sdk) {
  sdk.api.register("generateOTPs", generateOTPs);
}
