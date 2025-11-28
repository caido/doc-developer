# Adding Custom Request View Modes

You can add custom view modes to display requests in alternative formats, such as custom parsers, formatted views, or visual editors. Custom view modes appear alongside the default view options in the request viewer.

## Adding a View Mode

View modes are available on multiple pages:
- HTTP History (`sdk.httpHistory.addRequestViewMode()`)
- Replay (`sdk.replay.addRequestViewMode()`)
- Search (`sdk.search.addRequestViewMode()`)
- Sitemap (`sdk.sitemap.addRequestViewMode()`)
- Automate (`sdk.automate.addRequestViewMode()`)
- Intercept (`sdk.intercept.addRequestViewMode()`)
- Findings (`sdk.findings.addRequestViewMode()`)

```ts
sdk.httpHistory.addRequestViewMode({
  label: "My Custom View",
  view: myComponent,
});
```

## View Mode Options

- `label` - The display name shown in the view mode selector
- `view` - A component definition that renders the custom view

## Example: JSON Formatter View

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createJSONFormatterView = (sdk: CaidoSDK) => {
  return {
    render: (container: HTMLElement, request: any) => {
      container.innerHTML = "";

      try {
        // Parse request body as JSON
        const body = request.body || "{}";
        const json = JSON.parse(body);
        const formatted = JSON.stringify(json, null, 2);

        const pre = document.createElement("pre");
        pre.style.padding = "16px";
        pre.style.backgroundColor = "#f5f5f5";
        pre.style.borderRadius = "4px";
        pre.style.overflow = "auto";
        pre.textContent = formatted;

        container.appendChild(pre);
      } catch (err) {
        const error = document.createElement("div");
        error.textContent = "Invalid JSON";
        error.style.color = "red";
        container.appendChild(error);
      }
    },
  };
};

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestViewMode({
    label: "JSON Formatter",
    view: createJSONFormatterView(sdk),
  });
};
```

## Example: Visual Request Builder

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createVisualBuilderView = (sdk: CaidoSDK) => {
  return {
    render: (container: HTMLElement, request: any) => {
      container.innerHTML = "";
      container.style.padding = "20px";

      // Method selector
      const methodLabel = document.createElement("label");
      methodLabel.textContent = "Method: ";
      const methodSelect = document.createElement("select");
      ["GET", "POST", "PUT", "DELETE", "PATCH"].forEach((method) => {
        const option = document.createElement("option");
        option.value = method;
        option.textContent = method;
        if (request.method === method) {
          option.selected = true;
        }
        methodSelect.appendChild(option);
      });
      methodLabel.appendChild(methodSelect);
      container.appendChild(methodLabel);

      // URL input
      const urlLabel = document.createElement("label");
      urlLabel.textContent = "URL: ";
      urlLabel.style.display = "block";
      urlLabel.style.marginTop = "16px";
      const urlInput = document.createElement("input");
      urlInput.type = "text";
      urlInput.value = request.url || "";
      urlInput.style.width = "100%";
      urlInput.style.padding = "8px";
      urlLabel.appendChild(urlInput);
      container.appendChild(urlLabel);

      // Headers section
      const headersLabel = document.createElement("h3");
      headersLabel.textContent = "Headers";
      headersLabel.style.marginTop = "16px";
      container.appendChild(headersLabel);

      const headersContainer = document.createElement("div");
      Object.entries(request.headers || {}).forEach(([key, value]) => {
        const headerRow = document.createElement("div");
        headerRow.style.display = "flex";
        headerRow.style.gap = "8px";
        headerRow.style.marginBottom = "8px";

        const keyInput = document.createElement("input");
        keyInput.value = key;
        keyInput.style.flex = "1";
        keyInput.style.padding = "8px";

        const valueInput = document.createElement("input");
        valueInput.value = String(value);
        valueInput.style.flex = "2";
        valueInput.style.padding = "8px";

        headerRow.appendChild(keyInput);
        headerRow.appendChild(valueInput);
        headersContainer.appendChild(headerRow);
      });
      container.appendChild(headersContainer);
    },
  };
};

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestViewMode({
    label: "Visual Builder",
    view: createVisualBuilderView(sdk),
  });
};
```

## Example: XML Tree View

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createXMLTreeView = (sdk: CaidoSDK) => {
  return {
    render: (container: HTMLElement, request: any) => {
      container.innerHTML = "";

      const body = request.body || "";
      
      if (!body.trim().startsWith("<")) {
        const message = document.createElement("div");
        message.textContent = "Not an XML request";
        message.style.padding = "16px";
        message.style.color = "#666";
        container.appendChild(message);
        return;
      }

      // Simple XML tree renderer
      const parseXML = (xmlString: string): HTMLElement => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        
        const renderNode = (node: Node, depth: number = 0): HTMLElement => {
          const div = document.createElement("div");
          div.style.paddingLeft = `${depth * 20}px`;
          div.style.marginBottom = "4px";

          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            div.textContent = `<${element.tagName}>`;
            div.style.fontWeight = "bold";
            div.style.color = "#0066cc";

            Array.from(element.childNodes).forEach((child) => {
              div.appendChild(renderNode(child, depth + 1));
            });
          } else if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
            div.textContent = node.textContent.trim();
            div.style.color = "#333";
          }

          return div;
        };

        return renderNode(xmlDoc.documentElement);
      };

      try {
        const tree = parseXML(body);
        container.appendChild(tree);
      } catch (err) {
        const error = document.createElement("div");
        error.textContent = "Failed to parse XML";
        error.style.color = "red";
        container.appendChild(error);
      }
    },
  };
};

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestViewMode({
    label: "XML Tree",
    view: createXMLTreeView(sdk),
  });
};
```

## Example: Request Statistics View

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createStatisticsView = (sdk: CaidoSDK) => {
  return {
    render: (container: HTMLElement, request: any) => {
      container.innerHTML = "";
      container.style.padding = "20px";

      const stats = [
        { label: "Method", value: request.method || "N/A" },
        { label: "URL Length", value: String((request.url || "").length) },
        { label: "Header Count", value: String(Object.keys(request.headers || {}).length) },
        { label: "Body Size", value: String((request.body || "").length) + " bytes" },
      ];

      stats.forEach((stat) => {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.justifyContent = "space-between";
        row.style.padding = "8px";
        row.style.borderBottom = "1px solid #eee";

        const label = document.createElement("span");
        label.textContent = stat.label + ":";
        label.style.fontWeight = "bold";

        const value = document.createElement("span");
        value.textContent = stat.value;

        row.appendChild(label);
        row.appendChild(value);
        container.appendChild(row);
      });
    },
  };
};

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestViewMode({
    label: "Statistics",
    view: createStatisticsView(sdk),
  });
};
```

## Component Definition

The `view` property accepts a component definition with a `render` method that receives:
- `container` - The HTMLElement where your view should be rendered
- `request` - The request object containing method, URL, headers, body, etc.

```ts
{
  render: (container: HTMLElement, request: any) => {
    // Render your custom view
  }
}
```

::: tip
Custom view modes are great for domain-specific request formats or when you need specialized visualization of request data.
:::

::: info
View modes are available on all pages that display requests. Consider adding your view mode to multiple pages if it's useful across different contexts.
:::

::: warning
The request object structure may vary between pages. Test your view mode on the pages where you add it to ensure compatibility.
:::

