import "leaflet";

declare module "leaflet" {
  export interface MarkerCluster extends L.Marker {
    getChildCount(): number;
  }
}
