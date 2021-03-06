// Copyright 2015 Google Inc. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file.

// Sample helloworld is a basic App Engine flexible app.
package main

import (
    "google.golang.org/appengine"
    "fmt"
    "log"
    "net/http"
)

func main() {
    fs := http.FileServer(http.Dir("static"))
    http.Handle("/", fs)

    http.HandleFunc("/_ah/health", healthCheckHandler)
    log.Print("Listening on port 8080")
    http.ListenAndServe(":8080", nil)
    appengine.Main()
}

func healthCheckHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "ok")
}