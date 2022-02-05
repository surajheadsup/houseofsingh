import React from 'react';
import * as Style from '../styles/Subscribe.module.css'
function SubscribeForm() {
  return <div>
      <div className={Style.parent}>
        <div className={Style.main}>
            <form>
                <div className={'form-group'}>
                    <div className={Style.inputGroup}>
                        <input type="text" className={`${Style.input}`} placeholder="Email address"/>
                        <button type="button" className={Style.submit}>Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
      </div>
  </div>;
}

export default SubscribeForm;
