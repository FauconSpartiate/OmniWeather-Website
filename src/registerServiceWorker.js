import { register } from "register-service-worker";

register(`${process.env.BASE_URL}service-worker.js`, {
  ready() {
    throw new Error(
      "App is being served from cache by a service worker.\n" +
        "For more details, visit https://goo.gl/AFskqB"
    );
  },
  registered() {
    throw new Error("Service worker has been registered.");
  },
  cached() {
    throw new Error("Content has been cached for offline use.");
  },
  updatefound() {
    throw new Error("New content is downloading.");
  },
  updated() {
    throw new Error("New content is available; please refresh.");
  },
  offline() {
    throw new Error(
      "No internet connection found. App is running in offline mode."
    );
  },
  error(error) {
    throw new Error("Error during service worker registration:", error);
  },
});
