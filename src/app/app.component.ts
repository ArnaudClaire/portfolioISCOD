import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    ContactComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursorEnabled = false
  cursorVisible = false
  cursorInteractive = false
  cursorPressed = false
  cursorX = 0
  cursorY = 0
  cursorRingX = 0
  cursorRingY = 0
  private readonly isBrowser: boolean
  private animationFrameId: number | null = null

  constructor(
    private titleService: Title,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId)
    this.titleService.setTitle(
      'Arnaud CLAIRE - Expert en Ingénierie du Logiciel - Portfolio'
    );

    if (this.isBrowser) {
      this.cursorEnabled = window.matchMedia('(pointer: fine)').matches
    }
  }

  @HostListener('document:mousemove', ['$event'])
  handleMouseMove(event: MouseEvent): void {
    if (!this.cursorEnabled) {
      return
    }

    this.cursorVisible = true
    this.cursorX = event.clientX
    this.cursorY = event.clientY

    if (this.cursorRingX === 0 && this.cursorRingY === 0) {
      this.cursorRingX = event.clientX
      this.cursorRingY = event.clientY
    }

    this.startCursorAnimation()
  }

  @HostListener('document:mouseover', ['$event'])
  handleMouseOver(event: MouseEvent): void {
    if (!this.cursorEnabled) {
      return
    }

    const target = event.target instanceof Element ? event.target : null
    this.cursorInteractive = Boolean(
      target?.closest(
        'a, button, [role="button"], summary, label[for], input[type="checkbox"], input[type="radio"]',
      ),
    )
  }

  @HostListener('document:mouseleave')
  handleMouseLeave(): void {
    if (!this.cursorEnabled) {
      return
    }

    this.cursorVisible = false
    this.cursorInteractive = false
    this.cursorPressed = false
  }

  @HostListener('document:mousedown')
  handleMouseDown(): void {
    if (!this.cursorEnabled) {
      return
    }

    this.cursorPressed = true
  }

  @HostListener('document:mouseup')
  handleMouseUp(): void {
    if (!this.cursorEnabled) {
      return
    }

    this.cursorPressed = false
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId)
    }
  }

  private startCursorAnimation(): void {
    if (!this.isBrowser || this.animationFrameId !== null) {
      return
    }

    const animate = () => {
      const deltaX = this.cursorX - this.cursorRingX
      const deltaY = this.cursorY - this.cursorRingY

      this.cursorRingX += deltaX * 0.18
      this.cursorRingY += deltaY * 0.18

      if (Math.abs(deltaX) < 0.2 && Math.abs(deltaY) < 0.2) {
        this.cursorRingX = this.cursorX
        this.cursorRingY = this.cursorY
        this.animationFrameId = null
        return
      }

      this.animationFrameId = requestAnimationFrame(animate)
    }

    this.animationFrameId = requestAnimationFrame(animate)
  }
}
