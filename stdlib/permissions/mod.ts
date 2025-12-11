/**
 * Простейшая заглушка управления разрешениями Farog.
 */
export type PermissionKind = "network" | "fs" | "env" | "process";

export interface PermissionDescriptor {
  kind: PermissionKind;
  resource?: string;
}

export async function requestPermission(desc: PermissionDescriptor): Promise<boolean> {
  console.log(`Запрос разрешения: ${desc.kind} ${desc.resource ?? ""} — заглушка.`);
  return true;
}
