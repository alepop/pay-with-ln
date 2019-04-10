import { Component, Prop, State } from '@stencil/core';
import webln, { WebLNProvider } from 'webln';
import { linkFallback } from '../../utils';

declare global {
  interface Window {
    webln: WebLNProvider
  }
}

@Component({
  tag: 'pay-with-ln',
  styleUrl: 'button.css',
  shadow: true
})
export class PayWithLN {
  @Prop() paymentRequest: string;
  @State() isLoading = false;

  isEnabled: boolean = false;

  isProviderEnabled = async () => {
    try {
      await webln.requestProvider()
      this.isEnabled = true;
    } catch (e) {
      this.isEnabled = false;
    }
    return this.isEnabled
  }

  onClick = async (e: MouseEvent) => {
    e.preventDefault()
    this.isLoading = true;
    const isEnabled = await this.isProviderEnabled()
    if (isEnabled) {
      try {
        await window.webln.sendPayment(this.paymentRequest);
      } catch (error) {
        // ignore
      }
    } else {
      linkFallback(this.paymentRequest);
    }
    this.isLoading = false;
  }

  render() {
    const clssNames = `ant-btn ant-btn-primary ${this.isLoading && 'ant-btn-loading'}`;
    return (
      <button class={clssNames} type="button" onClick={this.onClick}>
        Pay with&nbsp;
        {this.isLoading
          ? <i aria-label="icon: loading" class="anticon anticon-loading"><svg viewBox="0 0 1024 1024" class="anticon-spin" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg></i>
          : <i aria-label="icon: thunderbolt" class="anticon anticon-thunderbolt"> <svg viewBox="64 64 896 896" data-icon="thunderbolt" width="1em" height="1em" fill="currentColor" aria-hidden="true"> <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path> </svg> </i>
        }
      </button>
    )
  }
}
