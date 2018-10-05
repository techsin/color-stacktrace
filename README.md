# color-stacktrace
Highlight your files in stack trace over files in node_modules or native events. Helps in debugging by preventing from focusing on useless information.



## What does it do?
It makes your file stand out and grays out the irrelevant files.
It goes from this
```
Error: test
    at WebSocket.wsEventsHandler (C:\Users\user\Desktop\Projects\test\app\routes\api\ws\socket\socketReceiver.js:26:13)
    at WebSocket.emit (events.js:159:13)
    at Receiver.receiverOnMessage (C:\Users\user\Desktop\Projects\test\node_modules\ws\lib\websocket.js:719:21)
    at Receiver.emit (events.js:159:13)
    at Receiver.dataMessage (C:\Users\user\Desktop\Projects\test\node_modules\ws\lib\receiver.js:414:14)
    at stream.Writable.decompress.perMessageDeflate.decompress (C:\Users\user\Desktop\Projects\test\node_modules\ws\lib\receiver.js:371:23)
    at __dirname.decompress.zlibLimiter.push._decompress (C:\Users\user\Desktop\Projects\test\node_modules\ws\lib\permessage-deflate.js:307:9)
    at __dirname._decompress.callback._inflate.flush (C:\Users\user\Desktop\Projects\test\node_modules\ws\lib\permessage-deflate.js:389:7)
    at afterWrite (_stream_writable.js:466:3)
    at onwrite (_stream_writable.js:457:7)
    at InflateRaw.afterTransform (_stream_transform.js:89:3)
    at Zlib.processCallback (zlib.js:576:8)
   ```
to this
