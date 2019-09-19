import { getCommands } from "./commands/commands";
import { getVariableValues } from "./questions/questions";
import {gitFlow} from "./git/git";
import {createExtensionApp} from "./files/copy";
import {deleteFolderRecursive} from "./files/utils";
import {local} from "../utils/constants";
import {initializeProject} from "./initializer/initializer";
import chalk from "chalk";

export async function cli(args) {
  let options = getCommands(args);
  options = await getVariableValues(options);
  deleteFolderRecursive(local);
  await gitFlow();
  await createExtensionApp(options);
  await initializeProject();
  deleteFolderRecursive(local);
  console.log('%s Project ready', chalk.green.bold('DONE'));
}
