export const api = "https://graph.microsoft.com/v1.0";

export const msalConfig = {
  auth: {
    clientId: "c0f361da-5835-4261-b97d-f742d2d488db",
    redirectUri: "http://localhost:3000",
  },
};

export const msalRequest = {
  scopes: ["user.read", "mailboxsettings.read", "calendars.readwrite"],
};
