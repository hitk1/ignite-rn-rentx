import React from 'react'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

import {
    Calendar as CustomCalendar,
    LocaleConfig
} from 'react-native-calendars'


LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNameShort: [
        'JAN',
        'FEV',
        'MAR',
        'ABR',
        'MAI',
        'JUN',
        'JUL',
        'AGO',
        'SET',
        'OUT',
        'NOV',
        'DEZ'
    ],
    dayNames: [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ],
    dayNamesShort: [
        'DOM',
        'SEG',
        'TER',
        'QUA',
        'QUI',
        'SEX',
        'SÁB'
    ],
    today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br'

export const Calendar = () => {
    const theme = useTheme()

    return (
        <CustomCalendar
            renderArrow={(direction) =>
                <Feather
                    name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                    size={24}
                    color={theme.colors.text}
                />
            }
            headerStyle={{
                backgroundColor: theme.colors.background_secondary,
                borderBottomWidth: .5,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10
            }}
            theme={{
                textDayFontFamily: theme.fonts.primary_400,
                textDayHeaderFontFamily: theme.fonts.primary_500,
                textDayHeaderFontSize: 10,
                textMonthFontSize: 20,
                textMonthFontFamily: theme.fonts.secondary_500,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}
            firstDay={1}
            minDate={new Date().toISOString()}
        />
    )
}