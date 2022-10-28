## About

This is a minimal project with [Hono](https://github.com/honojs/hono/) for Cloudflare Workers.  
This uses the wttr.in API.  
You can check the weather and the moon phases with images.

## Preview

### Weather

- `https://wttr-in-workers.kshida.workers.dev/weather/{CityName}`
  - This is the default. Weather information is displayed.
  - e.g. https://wttr-in-workers.kshida.workers.dev/weather/Tokyo
- `https://wttr-in-workers.kshida.workers.dev/weather/{CityName}?v=2`
  - This displays detailed weather information.
  - e.g. https://wttr-in-workers.kshida.workers.dev/weather/Tokyo?v=2
- `https://wttr-in-workers.kshida.workers.dev/weather/{CityName}?v=3`
  - This displays weather information on a map.
  - e.g. https://wttr-in-workers.kshida.workers.dev/weather/Tokyo?v=3

### Moon phases

- https://wttr-in-workers.kshida.workers.dev/moon
  - This is the default. Today's moon is displayed.
- `https://wttr-in-workers.kshida.workers.dev/moon?date={date}`
  - date is `YYYY-MM-DD`.
  - The moon that was visible on the specified date is displayed.
  - e.g. https://wttr-in-workers.kshida.workers.dev/moon?date=2022-10-10

## Thanks

- https://github.com/chubin/wttr.in
- https://github.com/honojs/hono
