import { musicMiddleware } from "../../middleware/musicMiddleware.sakuria";
import { CommandType, defineCommand } from "../../types";
import { SlashCommandBuilder } from "@discordjs/builders";

export default defineCommand({
  data: new SlashCommandBuilder().setName("queue").setDescription("Shows you the current queue"),
  type: CommandType.MUSIC_PLAYER,
  execute: async (interaction) => {
    return musicMiddleware(interaction, async (channel, player) => {
      return player.queue.join("\n").substr(0, 2000) || "There's nothing playing currently~!";
    });
  },
});
