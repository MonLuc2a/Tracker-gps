#include <TinyGPS++.h>
#include <SoftwareSerial.h>
#include <WiFi.h> // ou <Ethernet.h> selon votre choix

const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";
const char* server = "your_SERVER_IP_or_DOMAIN";
const int port = 80;

SoftwareSerial gpsSerial(3, 4); // Pins pour le module GPS
TinyGPSPlus gps;

void setup() {
  Serial.begin(9600);
  gpsSerial.begin(9600);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connexion en cours...");
  }

  Serial.println("Connecté au WiFi");
}

void loop() {
  while (gpsSerial.available() > 0) {
    gps.encode(gpsSerial.read());

    if (gps.location.isUpdated()) {
      float latitude = gps.location.lat();
      float longitude = gps.location.lng();
      sendDataToServer(latitude, longitude);
    }
  }
}

void sendDataToServer(float lat, float lng) {
  WiFiClient client;

  if (client.connect(server, port)) {
    String data = "lat=" + String(lat, 6) + "&lng=" + String(lng, 6);
    client.println("POST /api/gps HTTP/1.1");
    client.println("Host: " + String(server));
    client.println("Content-Type: application/x-www-form-urlencoded");
    client.println("Content-Length: " + String(data.length()));
    client.println();
    client.print(data);
  }

  client.stop();
}
