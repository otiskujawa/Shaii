# 🌸 Shaii General Purpose Bot
<img align="left" src="https://media.discordapp.net/attachments/550913067517607946/634231448928387072/OC_Shaii_CHIBICHARM2.png?width=200&height=236">

## ⚡ Plugins
Plugins are runtime-loadable type-safe flexible components that have access to all of the bot's events
including `timers` which automatically get cleared on hot reloads so you don't have to manage
memory

### Example

Let's say you wanna make a plugin that when someone pings shaii she automatically
replies to them with a random answer from an array of strings:

```ts
// plugins/reply-on-mentions.ts

export default definePlugin({
  name: "@geoxor/reply-on-mentions",
  events: {
    messageCreate: (message) => {
      if (message.mentions.first() === SHAII) {
        message.reply(randomItem(["hello", "you're annoying", "don't talk to me again!"]));
      }
    },
  },
});
```

## How to install

Don't use this fork
Use this repo instead: https://github.com/Geoxor/Shaii

<img src="https://cdn.discordapp.com/attachments/933655392972595200/939949788571516948/shit.gif">
