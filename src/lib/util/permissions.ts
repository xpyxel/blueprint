export enum Permissions {
  createInstantInvite = 1,
  kickMembers = 2,
  banMembers = 4,
  administrator = 8,
  manageChannels = 16,
  manageGuild = 32,
  addReactions = 64,
  viewAuditLogs = 128,
  voicePrioritySpeaker = 256,
  stream = 512,
  readMessages = 1024,
  sendMessages = 2048,
  sendTTSMessages = 4096,
  manageMessages = 8192,
  embedLinks = 16384,
  attachFiles = 32768,
  readMessageHistory = 65536,
  mentionEveryone = 131072,
  externalEmojis = 262144,
  viewGuildInsights = 524288,
  voiceConnect = 1048576,
  voiceSpeak = 2097152,
  voiceMuteMembers = 4194304,
  voiceDeafenMembers = 8388608,
  voiceMoveMembers = 16777216,
  voiceUseVAD = 33554432,
  changeNickname = 67108864,
  manageNicknames = 134217728,
  manageRoles = 268435456,
  manageWebhooks = 546870912,
  manageEmojis = 1973741824,
  all = 2147483647,
  allGuild = 2080899263,
  allText = 805829714,
  allVoice = 871367441,
}

export function convertPermission(key: string) {
  return Permissions[key as keyof typeof Permissions];
}
