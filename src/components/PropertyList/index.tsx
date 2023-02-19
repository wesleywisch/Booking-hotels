import Image from 'next/image'

import Hotels from '../../assets/hotels.jpg'
import Apartamentos from '../../assets/apartamento.webp'
import Resorts from '../../assets/resorts.jpg'
import Villas from '../../assets/villa.jpg'
import Cabins from '../../assets/cabins.jpg'

import { PropertyListContainer, PropertyListItem, PropertyListTitles } from './styles'

export function PropertyList() {
  return (
    <PropertyListContainer>
      <PropertyListItem>
        <Image
          src={Hotels}
          alt="Hotels"
          className="propertyListImage"
        />

        <PropertyListTitles>
          <h3>Hotels</h3>
          <h4>233 hotels</h4>
        </PropertyListTitles>
      </PropertyListItem>

      <PropertyListItem>
        <Image
          src={Apartamentos}
          alt="Apartamentos"
          className="propertyListImage"
        />

        <PropertyListTitles>
          <h3>Apartamentos</h3>
          <h4>2331 Apartamentos</h4>
        </PropertyListTitles>
      </PropertyListItem>

      <PropertyListItem>
        <Image
          src={Resorts}
          alt="Resorts"
          className="propertyListImage"
        />

        <PropertyListTitles>
          <h3>Resorts</h3>
          <h4>2400 Resorts</h4>
        </PropertyListTitles>
      </PropertyListItem>

      <PropertyListItem>
        <Image
          src={Villas}
          alt="Villas"
          className="propertyListImage"
        />

        <PropertyListTitles>
          <h3>Villas</h3>
          <h4>2987 Villas</h4>
        </PropertyListTitles>
      </PropertyListItem>

      <PropertyListItem>
        <Image
          src={Cabins}
          alt="Cabins"
          className="propertyListImage"
        />

        <PropertyListTitles>
          <h3>Cabins</h3>
          <h4>4324 Cabins</h4>
        </PropertyListTitles>
      </PropertyListItem>
    </PropertyListContainer>
  )
}
