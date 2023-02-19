import Image from 'next/image'

import Austin from '../../assets/austin.jpg'
import Dublin from '../../assets/dublin.jpg'
import Reno from '../../assets/reno.jpg'

import { FeaturedContainer, FeaturedItem, FeaturedTitles } from './styles'

export function Featured() {
  return (
    <FeaturedContainer>
      <FeaturedItem>
        <Image
          src={Dublin}
          alt="Dublin"
          className="featuredImage"
        />

        <FeaturedTitles>
          <h3>Dublin</h3>
          <p>123 propriedades</p>
        </FeaturedTitles>
      </FeaturedItem>

      <FeaturedItem>
        <Image
          src={Austin}
          alt="Austin"
          className="featuredImage"
        />

        <FeaturedTitles>
          <h3>Austin</h3>
          <p>563 propriedades</p>
        </FeaturedTitles>
      </FeaturedItem>

      <FeaturedItem>
        <Image
          src={Reno}
          alt="Reno"
          className="featuredImage"
        />

        <FeaturedTitles>
          <h3>Reno</h3>
          <p>78 propriedades</p>
        </FeaturedTitles>
      </FeaturedItem>
    </FeaturedContainer>
  )
}
