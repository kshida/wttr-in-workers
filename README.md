## About

This is a minimal project with [Hono](https://github.com/honojs/hono/) for Cloudflare Workers.  
This uses the wttr.in API.  
You can check the weather and the moon phases with images.

## Preview

### Weather

- https://wttr-in-workers.kshida.workers.dev/weather/{CityName}
  - This is the default. Weather information is displayed.
- https://wttr-in-workers.kshida.workers.dev/weather/{CityName}?v=2
  - This displays detailed weather information.
- https://wttr-in-workers.kshida.workers.dev/weather/{CityName}?v=3
  - This displays weather information on a map.

### Moon phases

- https://wttr-in-workers.kshida.workers.dev/moon
  - This is the default. Today's moon is displayed.
- https://wttr-in-workers.kshida.workers.dev/moon?date={date}
  - date is YYYY-MM-DD.
  - The moon that was visible on the specified date is displayed.

## Thanks

- https://github.com/chubin/wttr.in
- https://github.com/honojs/hono/
