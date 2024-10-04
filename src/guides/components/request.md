# HTTP Requests in Plugins

Requests can be interacted with and sent in both Workflows and plugins.

## Sending a request:

``` ts
// WIP
```

## request

The request object represents a request that has been proxied by Caido in its _immutable state_, meaning it cannot be modified.

### To get information about a request:

There are multiple methods available in order to return information about a request.

- `getID()` - Return the numerical identifier of the request.
- `getHost()` - Return the target host of the request.
- `getPort()` - Return the port that the request was sent to.
- `getMethod()` - Return the HTTP method of the request.
- `getPath()` - Return the URL path of the request.
- `getQuery()` - Return the URL query of the request.
- `getHeaders()` - Return the headers of the request as a key-value pair object array.
- `getHeader()` - Return the value/values of the header specified as an argument.
- `getTls()` - Return a boolean value specifying if the request was sent using TLS encryption or not.
- `getBody()` - Return the body of the request.

## requestspec

In order to convert a request from its immutable state in order to modify it, the `toSpec()` method is available.

A request object in its mutable state shares all the methods of one in a immutable state and also comes with methods that can be used to modify it.

- `setHost()` -
- `setPort` -
- `setTls()` -
- `setMethod()` -
- `setPath()` -
- `setQuery()` -
- `setHeader()` -
- `removeHeader()` -
- `setBody()` -
- `setRaw()` -
