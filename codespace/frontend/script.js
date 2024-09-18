const PLUGIN_PATH = "/otp-generator-plugin";

const createPage = (sdk) => {
  const container = document.createElement("div");
  container.className = "otp-generator";
  
  const headerText = document.createElement("h1");
  headerText.textContent = "OTP Generator";
  
  const inputContainer = document.createElement("div");
  inputContainer.className = "input-container";

  const fromInput = document.createElement("input");
  fromInput.type = "number";
  fromInput.id = "fromNumber";
  fromInput.placeholder = "From";
  fromInput.value = "1";  

  const toInput = document.createElement("input");
  toInput.type = "number";
  toInput.id = "toNumber";
  toInput.placeholder = "To";
  toInput.value = "1000";  

  inputContainer.appendChild(fromInput);
  inputContainer.appendChild(toInput);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const generateButton = document.createElement("button");
  generateButton.className = "c-button generate-button";
  generateButton.textContent = "Generate OTPs";

  const copyButton = document.createElement("button");
  copyButton.className = "c-button copy-button";
  copyButton.textContent = "Copy to Clipboard";

  buttonContainer.appendChild(generateButton);
  buttonContainer.appendChild(copyButton);

  const outputArea = document.createElement("textarea");
  outputArea.id = "outputArea";
  outputArea.rows = 10;
  outputArea.readOnly = true;

  container.appendChild(headerText);
  container.appendChild(inputContainer);
  container.appendChild(buttonContainer);
  container.appendChild(outputArea);

  generateButton.addEventListener("click", async () => {
    const fromNumber = parseInt(fromInput.value);
    const toNumber = parseInt(toInput.value);
    
    if (isNaN(fromNumber) || isNaN(toNumber) || fromNumber > toNumber) {
      sdk.window.showToast("Invalid input range", { variant: "error", duration: 3000 });
      return;
    }

    try {
      const result = await sdk.backend.generateOTPs(fromNumber, toNumber);
      outputArea.value = result.returns;
      sdk.window.showToast("OTPs generated successfully", { variant: "success", duration: 3000 });
    } catch (error) {
      sdk.window.showToast("Error: " + error.message, { variant: "error", duration: 3000 });
    }
  });

  copyButton.addEventListener("click", () => {
    outputArea.select();
    document.execCommand('copy');
    sdk.window.showToast("OTPs copied to clipboard", { variant: "info", duration: 3000 });
  });

  sdk.navigation.addPage(PLUGIN_PATH, {
    body: container
  });
};

export const init = (sdk) => {
  createPage(sdk);

  sdk.sidebar.registerItem("OTP Generator", PLUGIN_PATH, {
    icon: "fas fa-key"
  });
};
