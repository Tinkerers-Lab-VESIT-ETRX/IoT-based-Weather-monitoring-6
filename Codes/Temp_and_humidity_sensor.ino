 #include  <DHT.h>
 #define DHTPIN A0
 #define DHTTYPE DHT11
 DHT dht ( DHTPIN, DHTTYPE ) ;
 void setup ( ) {
   Serial.begin ( 9600 ) ;
   Serial.println("Welcome to VESIT\n");
   delay(500);
   Serial.println("DHT11 Humidity & temperature Sensor\n\n");
   delay(1000);
   dht.begin (  ) ;
 }
 void loop ( ) {
  float humidity = dht.readHumidity ( ) ;  
  float temp = dht.readTemperature ( ) ;
{
Serial.print ( " Temp is " ) ;  
     Serial.print ( temp ) ;         
     Serial.println ( " *C " ) ;
     Serial.print ( " Humidity in % is : " ) ;                    
     Serial.print ( humidity ) ;
     Serial.print ( " % \t " ) ; 
   }
 }
