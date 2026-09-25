// @vitest-environment jsdom

import { describe, expect, it } from 'vitest'
import { createApp, nextTick } from 'vue'
import NavBar from '@/components/NavBar.vue'

describe('NavBar', () => {
  it('expone y actualiza el estado accesible del menú móvil', async () => {
    const host = document.createElement('div')
    document.body.append(host)
    const app = createApp(NavBar)
    app.mount(host)
    const button = host.querySelector<HTMLButtonElement>('button[aria-controls="mobile-navigation"]')

    expect(button).not.toBeNull()
    if (!button) throw new Error('No se encontró el botón del menú móvil')

    expect(button.getAttribute('aria-expanded')).toBe('false')
    expect(button.getAttribute('aria-label')).toBe('Abrir menú')

    button.click()
    await nextTick()

    expect(button.getAttribute('aria-expanded')).toBe('true')
    expect(button.getAttribute('aria-label')).toBe('Cerrar menú')
    expect(host.querySelector('#mobile-navigation')).not.toBeNull()

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await nextTick()

    expect(button.getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(button)

    app.unmount()
    host.remove()
  })
})
