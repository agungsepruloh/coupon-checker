# Quick Start 🚀

### Add a default.json file in the config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>"
}
```

### Install server dependencies

```bash
npm install
```

### Run Express from root

```bash
npm run server
```

# How to use 🔥

- GET `/coupons` To see all coupons data

- POST `/check-coupon` To check a copoun with the following `json` format :
  ```json
  {
  	"id": "<coupon_id>"
  }
  ```
  replace <coupon_id> with property `_id` in coupon data
