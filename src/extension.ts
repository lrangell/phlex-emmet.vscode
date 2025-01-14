import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

export function activate(context: vscode.ExtensionContext) {
  const serverOptions: ServerOptions = {
    command: "phlex_emmet_ls",
    args: [],
    transport: TransportKind.stdio,
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "ruby" }],
  };

  const client = new LanguageClient(
    "phlex-emmet-ls",
    "phlex-emmet-ls",
    serverOptions,
    clientOptions,
  );

  client.start();
}

export function deactivate() {}
