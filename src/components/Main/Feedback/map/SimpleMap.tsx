import React from 'react'

import GoogleMapReact from 'google-map-react'

import { defaultCoordinates } from './constants/defaultCoordinates'
import { MapMarker } from './MapMarker'

import styles from './SimpleMap.module.scss'

export const SimpleMap = () => {
  return (
    <div className={styles.wrapper}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultCoordinates.center}
        defaultZoom={defaultCoordinates.zoom}
      >
        <MapMarker
          lat={defaultCoordinates.center.lat}
          lng={defaultCoordinates.center.lng}
          text="Furniture F"
        />
      </GoogleMapReact>
    </div>
  )
}
