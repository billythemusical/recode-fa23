# Digital Ocean Droplets

## Setting up a Droplet

#### Via Command Line 

Replace $TOKEN with your API token or save it as an environment variable like so:
`export TOKEN="your API token here"`

```bash
curl -X POST -H 'Content-Type: application/json' \
-H 'Authorization: Bearer '$TOKEN'' \
-d '{"name":"recode",
    "size":"s-1vcpu-512mb-10gb",
    "region":"nyc1",
    "image":"ubuntu-23-10-x64",
    "monitoring":true}' \
"https://api.digitalocean.com/v2/droplets"
```

[Initial Server Setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04)

[Fixing SSH issues](https://docs.digitalocean.com/support/how-to-troubleshoot-ssh-authentication-issues/#fixing-key-permissions-and-ownership) - specifically key permissions and specifying a key in the `ssh -i /path/to/key user@<ip>`

[Adding a non-root user](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04)