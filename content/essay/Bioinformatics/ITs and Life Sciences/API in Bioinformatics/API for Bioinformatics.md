---
title: 'API for Bioinformatics'
cms_exclude: true
subtitle: 

# Summary for listings and search engines
summary:

linktitle: API

# Link this post with a project
projects: [ITs and Life Sciences]

# Date published
date: "2020-12-13T00:00:00Z"

# Date updated
lastmod: "2020-12-13T00:00:00Z"

type: book

# Is this an unpublished draft?
draft: true

# Show this page in the Featured widget?
featured: false

# View.
#   1 = List
#   2 = Compact
#   3 = Card
view: 3

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: 'Image credit: []()'
  focal_point: ""
  placement: 2
  preview_only: false

authors:
- admin

tags:
- API

categories:
- Bioinformatics
---

## APIs on Bioinformatics 
This is a segment on a bigger series called [ITs and Life Sciences](ITs%20and%20Life%20Sciences.md).

The purpose of this segment is to shorten the gap for the usage of **application programming interface** (**API**) in Life Science databases, websites and tools, allowing manipulation of processes and data.

## What are APIs?
| Letter | Word                  | Which means                         | an example                |
| ------ | --------------------- | ----------------------------------- | ------------------------- |
| A      | Application           | Software that does something        | Waze                      |
| P      | Programming (request) | Program that speak to app           | ask for directions        |
| I      | Interfacing           | GUI that allows the user to program | in the Waze app or device |

In plain terms, people talk of API when going to the main source of information to make a _request_, activating a response.

## Why are they important?
- They allow to use programming without needing to write the program.
- Platform independent.
- It allows to ask orders from an app or database without knowing all the elements of the app or DB for construction.

One of the advantages is that the user doesn't need to know much of the App itself or how is built, only how to make request.
Stripes away the implementation.

Since everything is a request local devices don't have to store information.

Can be added to the URL in the form of parameter, which starts with a "?". Which usually marks the start of the request.
-tbm = _to be matched_

## Terms
- Mashup: a mix of different part, API mashup is made from other APIs. An example is hopper which call API information from airlines to obtain flights and rates.
- Web service: API that uses the web. Not every API use the web.


## Framework
Provide an API that allows to extend what superficially has been provided.

Universal Resource Locator (URL)
Every item or data from a website is considered a resource.

## WWW generalities
Web services use XML or JSON to send the message over the internet.

Computer (client) through a URI using generally the HTTP to create a request.

### HTTP Messages
Hypertext transfer protocol enables the link request.
How data is exchanged in client-server. Messages can be requests (client) and responses (answers) from the server.

In the HTTP start-line _request_ we have: API program folder (optional), parameters (optional) HTTP version.

In the HTTP start-line _response_ we have: HTTP ver. and Status Code.

HTTP requests and responses have:

| HTTP               | Request                                                                                | Response          |
| ------------------ | -------------------------------------------------------------------------------------- | ----------------- |
| Start-line         | version 1.1 / Method (CRUD) / search?q=                                                | 1.1 / status code |
| Headers (optional) | host: e.g. www.google.com / token, describes content-type so it's known what is sent or received.                             | cookie, file size |
| Blank line         | _only to separate body from header_                                                    |                   |
| Body (optional)    | This is where the content is sent from/to API, the type is content-type |                   |

Regarding _data_ (text information), the format must be XML or JSON.

- A start-line: always single line, success/failure.
- (optional) HTTP headers.
- blank line indicating meta-information.
- (optional) body with size specified in start-line.



#### Start-line

|                                        | Request                                                                  | Response                               |
| -------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------- |
| Name                                   | Start line, Request line                                                 | Start line, response line, status line |
| HTTP Version                           | HTTP/1.1                                                                 | HTTP/1.1                               |
| Method                                 | CRUD                                                                     | NO                                     |
| API program folder location (optional) | YES                                                                      | NO                                     |
| Parametes (optional)                   | YES                                                                      | NO                                     |
| Status code                            | NO                                                                       | YES                                    |
| Format                                 | Method(space) API Program Folder, Location+Parameters(space)HTTP version | HTTP Version + Status code             |
 
### CRUD Methods
![CRUD](Pasted%20image%2020220311133555.png)

### Idempotence
Can do as many times as you want and result stays the same. In other words, safe to repeat. The idempotence (safe to repeat) are GET, PUT and DELETE.

### XML
eXtensible Markup Language. 
HTTP Header Line: Content-type: application/XML.
It uses tags just as HTML (<></>), just created by W3C, but the tags are customizable, contrary to HTML which are fixed.


## JSON
JavaScript Object Notation. Is the part of Javascript that holds data. 
HTTP Header Line: Content-Type: application/json.
HTTP body: JSON
Uses: "key": "Value" (example "size": "small")
Created by Douglas Crockford.
objects use {}
{"pizza" : [
	{"size" : "small",
		"toppings" : ["onions", "mushrooms"]
		}
	]
}

|            | XML  | JSON |
| ---------- | ---- | ---- |
| Powerful   | Y    | N    |
| Simple     | N    | Y    |
| Developed  | 1997 | 2001 |
| Popularity | Down | Up   | 

Some website require either XML or JSON, but the trend to XML is going down.

To open a JSON in Chrome JSONView is an extension that allows it.

| Time | API method                |
| ---- | ------------------------- |
| 1980 | Sun RPC (OWNED by Oracle) |
| 1989 | HTTP                      |
| 1998 | XML-RPC                   |
| 1999 | SOAP                      |
| 2000 | REST                      | 

## SOAP
Simple Object Access Protocol, the object is a web-service. Is a way to access web-services by following rules.
Uses a WSDL (Web Services Description Language)
Is oddly used today.

## REST
Representational State Transfer (REST) style. An API that uses this style and constraints is called RESTful. Rest request for transfer of a copy. 
There are different protocol, REST, XML/RPC or SOAP to transfer data. Is a way to do web services request/response. REST is increasing in popularity.

The crucial difference with SOAP is that the Method CRUD is included in the start-line.

### Constraints
#### Cacheability
Cache is something kept in memory by comparing the local information to the server's to see if cached information
#### Statelessness
State = a point in time. It will always respond with the latest update at the time, it doesn't depend on the state of the server. If the server is down will use the latest available, it sends a _representation_ of the state of the record, hence the name) In SOAP the request could fall if the server is compromised.

![Cl](Pasted%20image%2020220311131149.png)
Fig. Constraints for an API to be considered RESTful.

### 

## OpenAPI
Defines how to describe REST API interface, through OpenAPI definition (generally YAML or JSON).
Is an standarized format. 
- Describes: resources, endpoints, operations, parameters an authentication.
- Guide through the API
- Extend with tooling (SDK generation, validation documentation, etc).

...

Related to the way of working itself is more about detecting the basic needed information, such as tokens.

## Authentication/Authorization
Authentication = proving identity.
Authorization = limited access

| Name                      | Authentication | Authorization | Example            | Descriptiony                 |
| ------------------------- | -------------- | ------------- | ------------------ | ---------------------------- |
| No Auth                   | N              | N             | Google search page |                              |
| Basic Auth                | Y              | N             | Email account      | Credentials                  |
| Bearer token              | N              | Y             | Not many           | Requirement token for access |
| OAuth                     | Y              | Y             | Many (WAZE app)    | App ask for authrization     |
| Two Factor Authentication | Y              | N             | High security      | To secure information        | 

OAth 2.0 RFC 6749 (Specification)

### Authorization Grant Types
- **Authorization code**: client ask for permissions.
- **Implicit**: Ajax or Javascript the authorization petition is embedded in the request itself.
- **Resource owner**: someone with full-access gives request 
- **Client credentials Flow**: (e.g. changing a profile picture) and is never asked for permission).
- **Device Code Flow**: 

**Refresh token** allows for a new access token.
![mage](https://darutk.medium.com/diagrams-and-movies-of-all-the-oauth-2-0-flows-194f3c3ade85)

### Client Registration
The purpose is to create a client registration and continue with next steps. 
1. Client HTTP to Auth Server:
- Client type (public (native app cause can't hide secrets) or confidential (web app))
- Redirect URL 
- Client secret: through the PKC, where the app keep the secret. 
- Additional info (name, website, e-mail) 

Auth server HTTP to Client:
- Client ID
- Client secret

### OAuth Code Grant (Google Cloud)
Es un standard abierto para la autorizacion de APIs. Allowing to share information between sites without sharing the identity. Comes from the need of websites to pass on user credentials (say Google authentication to Runtastic). That way the end website (or Client) does not need user/password and the user gives access to limited actions. The amount of given access is called _reach_. 

#### Client types
Each may have different types of Grant Types.
- Public



[OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1)

### Connect ID



## Terms
- High level APIs: calendar, push notification, e-mail, contact.
- Native App: Native Apps have access to APIs.
- Hybrid app: native and web app.

| Comparison             | Native | Hybrid | Web |
| ---------------------- | ------ | ------ | --- |
| Quality                | X      |        |     |
| Speed                  | X      |        |     |
| Cost                   |        |        | X   |
| Google Play/ App Store | X      | X      |     |
| Device Access          | XX     | X      |     |

## References
- [FreeCodeCamp.org](https://www.youtube.com/watch?v=GZvSYJDk-us)
- [IBM: OpenAPI](https://www.youtube.com/watch?v=pRS9LRBgjYg)
- [Monetize on API](https://www.youtube.com/watch?v=MbqSMgMAzxU)
- [developer mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)
- [OpenWebinars](https://www.youtube.com/watch?v=GeXbsMezj8s)


## Resources
[programmable](https://www.programmableweb.com/)
[Public-apis](https://github.com/public-apis/public-apis)
[API list](https://apilist.fun/)