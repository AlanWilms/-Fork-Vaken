# Vaken

To run:
Create a mongoDB instance on port 27017.

```
npm i && npm run start
```
Separately on a new terminal window or tab:
```
npm run dev-server
```

You may have to manually update auth-level to see the organizer view via the mongoDB console:
```
db.users.update({ "email": "EMAIL_ADDRESS"}, { $set: {"authLevel": "Organizer"}})
```

## Common View
![docs/login_overview.png](docs/login_overview.png)
![docs/login_email.png](docs/login_email.png)
![docs/login_google.png](docs/login_google.png)
![docs/login_github.png](docs/login_github.png)

## Organizer View
![docs/organizer_dashboard.png](docs/organizer_dashboard.png)
![docs/organizer_table.png](docs/organizer_table.png)

## Hacker View
![docs/hacker_dashboard.png](docs/hacker_dashboard.png)
![docs/application.png](docs/application.png)
![docs/hacker_application.png](docs/hacker_application.png)
![docs/team.png](docs/team.png)

Note: all data in screenshots is dummy.
