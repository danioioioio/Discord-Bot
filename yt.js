const ytNotifs = require("youtube-notifs");
ytNotifs.start();
ytNotifs.events.on("newVid", (obj) => {
    let discordChannelId;
    switch (obj.vid.id) {
        case "UCwiOCpm4m7vHgMIEtLzK6bQ":
            discordChannelId = "889306044654825513";
            break;
    };
    client.channels.get(discordChannelId).send(ytNotifs.msg("{channelName} just uploaded a new video!\n{vidUrl}", obj));
});
ytNotifs.subscribe(["UCwiOCpm4m7vHgMIEtLzK6bQ"]);
//ok
