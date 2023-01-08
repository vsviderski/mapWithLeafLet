export const collapseRoutersPanel = () => {
  document
    .getElementsByClassName('leaflet-routing-collapsible')[0]
    .classList.add('leaflet-routing-container-hide');
};
