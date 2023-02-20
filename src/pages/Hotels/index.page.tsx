import { useRouter } from "next/router";
import { useState } from "react";
import dayjs from "dayjs";
import { DateRange } from "react-date-range";

import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";

import { HotelsMainContainer, HotelsWrapper, HotelsSearch, HotelsResults } from './styles'

type DateProps = {
  startDate: Date;
  endDate: Date;
  key: string;
}

type OptionsProps = {
  adult: number;
  children: number;
  room: number;
}

export default function Hotels() {
  const router = useRouter()

  const [openDateRange, setOpenDateRange] = useState(false)
  const [destination, setDestination] = useState<string>(router.query.destination as string);
  const [dateRange, setDateRange] = useState<DateProps[] | []>(() => {
    if (router.query.date) {
      return JSON.parse(router.query.date as string)
    }

    return [{
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }]
  });
  const [options, setOption] = useState<OptionsProps>(() => {
    if (router.query.options) {
      return JSON.parse(router.query.options as string)
    }

    return {
      adult: 1,
      children: 0,
      room: 1,
    }
  });

  return (
    <>
      <Navbar />
      <Header type="list" />

      <HotelsMainContainer>
        <HotelsWrapper>
          <HotelsSearch>
            <p className="title">Buscar</p>

            <div className="listItem">
              <label>Destino:</label>
              <input className="destination" type="text" placeholder={destination} />
            </div>

            <div className="listItem">
              <label>Data check-in:</label>

              <span className="check-in" onClick={() => setOpenDateRange(!openDateRange)}>
                {dateRange.length !== 0 ? `${dayjs(dateRange[0].startDate).format('DD/MM/YYYY')} á ${dayjs(dateRange[0].endDate).format('DD/MM/YYYY')}` : ''}
              </span>

              {openDateRange && (
                <DateRange
                  onChange={i => setDateRange([i.selection])}
                  minDate={new Date()}
                  ranges={dateRange}
                  moveRangeOnFirstSelection={false}
                  editableDateInputs={true}
                />
              )}
            </div>

            <div className="listItem">
              <label>Opções:</label>

              <div className="optionsWrapper">
                <div className="optionsItem">
                  <span className="optionsText">
                    Preço mínimo <small>por noite</small>
                  </span>

                  <input type="number" className="optionsInput" />
                </div>

                <div className="optionsItem">
                  <span className="optionsText">
                    Preço máximo <small>por noite</small>
                  </span>

                  <input type="number" className="optionsInput" />
                </div>

                <div className="optionsItem">
                  <span className="optionsText">
                    Adulto(s)
                  </span>

                  <input min={1} type="number" className="optionsInput" placeholder={String(options.adult)} />
                </div>

                <div className="optionsItem">
                  <span className="optionsText">
                    Criança(s)
                  </span>

                  <input min={0} type="number" className="optionsInput" placeholder={String(options.children)} />
                </div>

                <div className="optionsItem">
                  <span className="optionsText">
                    Quarto(s)
                  </span>

                  <input min={1} type="number" className="optionsInput" placeholder={String(options.room)} />
                </div>
              </div>

              <button>Buscar</button>
            </div>
          </HotelsSearch>

          <HotelsResults>

          </HotelsResults>
        </HotelsWrapper>
      </HotelsMainContainer>
    </>
  )
}
