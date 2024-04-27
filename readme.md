The application was built using the [Electron framework](https://www.electronjs.org/). The Electron is a framework for building desktop applications using JavaScript, HTML, and CSS. By embedding Chromium and Node.js into its binary, Electron allows you to maintain one JavaScript codebase and create cross-platform apps that work on Windows, macOS, and Linux — no native development experience is required.

For building this application the Electron version 22 was used as it is the last one to [support windows 7 and above](https://www.electronjs.org/blog/windows-7-to-8-1-deprecation-notice). 

TypeScript, which is JavaScript with syntax for types, was used instead of plain JavaScript.

The application does not require any internet connection to function as all the data is stored using the [DuckDB system](https://duckdb.org/).

The application has 11 types of users and is interface can be accessed in three languages (Englick, Uzbek, Russian).

The application can import and export encrypted data so the data can be passed from an institutional level user to a regional one, and from there to the national level.
