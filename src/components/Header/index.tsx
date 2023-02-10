import { useState } from 'react'
import { DateRange } from 'react-date-range'
import dayjs from 'dayjs'

import { MdHotel } from 'react-icons/md'
import { IoIosAirplane } from 'react-icons/io'
import { AiFillCar, AiOutlineMinus } from 'react-icons/ai'
import { FaTaxi } from 'react-icons/fa'
import { GoCalendar } from 'react-icons/go'
import { GiPerson } from 'react-icons/gi'
import { GrAdd } from 'react-icons/gr'

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderList,
  HeaderListItem,
  HeaderTitle,
  HeaderDescription,
  HeaderButton,
  HeaderSearchContainer,
  HeaderSearchItem,
  OptionsContainer,
  OptionsItem,
  OptionsCounter,
} from "./styles";

type HeaderProps = {
  type: string;
}

type DateRangeProps = {
  startDate: Date;
  endDate: Date;
  key: string;
}

type Options = {
  adult: number;
  children: number;
  room: number;
}

export function Header({ type }: HeaderProps) {
  const [openModalDate, setOpenModalDate] = useState(false)
  const [openModalOption, setOpenModalOptions] = useState(false)
  const [options, setOptions] = useState<Options>({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [dateRange, setDateRange] = useState<DateRangeProps[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  function handleOptions(nameOption: string, operation: 'add' | 'minus') {
    if (options.adult < 1 || options.children < 0 || options.room < 1) {
      return;
    }

    setOptions(prev => {
      return {
        ...prev, [nameOption]: operation === 'add' ? options[nameOption] + 1 : options[nameOption] - 1
      }
    })
  }

  return (
    <HeaderContainer>
      <HeaderWrapper className={`${type === 'list' ? 'listMode' : ''}`}>
        <HeaderList>
          <HeaderListItem className='active'>
            <MdHotel />
            <span>Estadias</span>
          </HeaderListItem>

          <HeaderListItem>

            <IoIosAirplane />
            <span>Voos</span>
          </HeaderListItem>

          <HeaderListItem>
            <AiFillCar />
            <span>Aluguel de carros</span>
          </HeaderListItem>

          <HeaderListItem>
            <MdHotel />
            <span>Atrações</span>
          </HeaderListItem>

          <HeaderListItem>
            <FaTaxi />
            <span>Táxi do aeroporto</span>
          </HeaderListItem>
        </HeaderList>

        {type !== 'list' && (
          <>
            <HeaderTitle>Uma vida inteira de descontos? É genial.</HeaderTitle>
            <HeaderDescription>Seja recompensado por suas viagens - desbloqueie economia instantânea de 10% ou mais com uma conta Booking Hotel gratuita.</HeaderDescription>

            <HeaderButton>Sign in / Register</HeaderButton>

            <HeaderSearchContainer>
              <HeaderSearchItem>
                <MdHotel className="headerSearchIcon" />
                <input
                  type="text"
                  placeholder="Onde você está indo?"
                  className="headerSearchInput"
                />
              </HeaderSearchItem>

              <HeaderSearchItem onClick={() => setOpenModalDate(!openModalDate)}>
                <GoCalendar className="headerSearchIcon" />
                <span className="headerSearchText">{`${dayjs(dateRange[0].startDate).format('DD/MM/YYYY')} á ${dayjs(dateRange[0].endDate).format('DD/MM/YYYY')}`}</span>

                {openModalDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={i => setDateRange([i.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    className="date"
                  />
                )}
              </HeaderSearchItem>

              <HeaderSearchItem onClick={() => setOpenModalOptions(!openModalOption)}>
                <GiPerson className="headerSearchIcon" />
                <span className="headerSearchText">
                  {`${options.adult} adulto${options.adult > 1 ? 's' : ''} - ${options.children} criança${options.children > 1 ? 's' : ''} - ${options.room} quarto${options.room > 1 ? 's' : ''}`}
                </span>

                {openModalOption && (
                  <OptionsContainer>
                    <OptionsItem>
                      <span className="optionText">Adulto(s)</span>

                      <OptionsCounter>
                        <button className="optionCounterButton" onClick={() => handleOptions('adult', 'minus')} disabled={options.adult === 1}>
                          <AiOutlineMinus />
                        </button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button className="optionCounterButton" onClick={() => handleOptions('adult', 'add')}>
                          <GrAdd />
                        </button>
                      </OptionsCounter>
                    </OptionsItem>

                    <OptionsItem>
                      <span className="optionText">Criança(s)</span>

                      <OptionsCounter>
                        <button className="optionCounterButton" onClick={() => handleOptions('children', 'minus')} disabled={options.children === 0}>
                          <AiOutlineMinus />
                        </button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={() => handleOptions('children', 'add')}>
                          <GrAdd />
                        </button>
                      </OptionsCounter>
                    </OptionsItem>

                    <OptionsItem>
                      <span className="optionText">Quarto(s)</span>

                      <OptionsCounter>
                        <button className="optionCounterButton" onClick={() => handleOptions('room', 'minus')} disabled={options.room === 1}>
                          <AiOutlineMinus />
                        </button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button className="optionCounterButton" onClick={() => handleOptions('room', 'add')}>
                          <GrAdd />
                        </button>
                      </OptionsCounter>
                    </OptionsItem>
                  </OptionsContainer>
                )}
              </HeaderSearchItem>

              <HeaderSearchItem>
                <HeaderButton>Search</HeaderButton>
              </HeaderSearchItem>
            </HeaderSearchContainer>
          </>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  )
}
