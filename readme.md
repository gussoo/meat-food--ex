Challenge: Front-End exercise for Openseneca

Requirements:
1) Web must be responsive.
- This web is responsive for Tablets and mobiles. Hamburger nav is working fine and it looks good on any device.

2) Take any picture you prefer from an online SaaS service like flickr, use their REST API (https://www.flickr.com/services/api/).
- All free pics are grabed from https://pixabay.com/, you can double check source file in root.

3) Add a map (google maps) to display our shops in your city. Use their REST API.
- For this functionality I reused my final project API that I did last year. I've changed some parts and of course it could be improved.

4) Add a section displaying tweets related to "meat is healthy" from your nearby. Use their REST API.
- In this case I've been investigating on https://dev.twitter.com/overview/api and it wasn't to difficult to do.

5) Interface must support multilanguage.
- For this last functionality I'm detecting the ip and checking it with "https://ipinfo.io" then depending of country code, it is changing the language automatically.
 I didn't want to use the browser setting because all of them have different kind of code so it could be a mess. By the way I didn't want to put a selector because that looks a little bit old in my opinion.

Notes: There are a couple of improvements like field checks and some styles.