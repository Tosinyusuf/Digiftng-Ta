import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout'
import { PERSONAL_HOME, BUSINESS_HOME } from './CONSTANTS'
import { Personal, Business, NotFound } from '../pages/index'
import { ThemeProvider } from 'styled-components'

// set the theme for the light toggle
const LightTheme = {}
const DarkTheme = {}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

export const RouterConfig = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <ThemeProvider theme={themes[theme]}>
        <Layout theme={theme} setTheme={setTheme}>
          <Routes>
            {/* List of all public routes here */}

            <Route exact path={PERSONAL_HOME} element={<Personal />} />
            <Route path={BUSINESS_HOME} element={<Business />} />

            {/* List a generic 404-Not Found route here */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  )
}
