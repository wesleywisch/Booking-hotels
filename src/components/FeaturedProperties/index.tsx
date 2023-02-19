import Image from 'next/image'

import Apartamento2 from '../../assets/apartamento2.jpg'

import { FeaturedPropertiesContainer, FeaturedPropertiesItem } from './styles'

export function FeaturedProperties() {
  return (
    <FeaturedPropertiesContainer>
      <FeaturedPropertiesItem>
        <Image
          src={Apartamento2}
          alt="Apartamento"
          className="featuredPropertiesImage"
        />

        <span className="name">Marcelo</span>
        <span className="city">Madrid</span>
        <span className="price">A partir de R$ 120</span>

        <div className="rating">
          <button>8.9</button> <span>Excelente</span>
        </div>
      </FeaturedPropertiesItem>

      <FeaturedPropertiesItem>
        <Image
          src={Apartamento2}
          alt="Apartamento"
          className="featuredPropertiesImage"
        />

        <span className="name">Marcelo</span>
        <span className="city">Madrid</span>
        <span className="price">A partir de R$ 120</span>

        <div className="rating">
          <button>8.9</button> <span>Excelente</span>
        </div>
      </FeaturedPropertiesItem>

      <FeaturedPropertiesItem>
        <Image
          src={Apartamento2}
          alt="Apartamento"
          className="featuredPropertiesImage"
        />

        <span className="name">Marcelo</span>
        <span className="city">Madrid</span>
        <span className="price">A partir de R$ 120</span>

        <div className="rating">
          <button>8.9</button> <span>Excelente</span>
        </div>
      </FeaturedPropertiesItem>

      <FeaturedPropertiesItem>
        <Image
          src={Apartamento2}
          alt="Apartamento"
          className="featuredPropertiesImage"
        />

        <span className="name">Marcelo</span>
        <span className="city">Madrid</span>
        <span className="price">A partir de R$ 120</span>

        <div className="rating">
          <button>8.9</button> <span>Excelente</span>
        </div>
      </FeaturedPropertiesItem>
    </FeaturedPropertiesContainer>
  )
}
