import * as React from 'react';
import BaseScriptAssetPlugin, { IScriptAssetPluginProps, IScriptAssetPluginState } from '@fraytools/plugin-core/lib/base/BaseScriptAssetPlugin';
import FrayToolsPluginCore from '@fraytools/plugin-core';
import { LittleAlchemy2Config } from './types';

/* PREREQS + HOW TO BUILD: 

- Go to Terminal and run `npm install`. 
- Run `npm run build` to create a build of your plugin. Drag it to your plugins folder to use it.

That's quite all.

*/

interface ILittleAlchemy2Props extends IScriptAssetPluginProps {
  configMetadata:LittleAlchemy2Config
  gameURL: string;
}

interface ILittleAlchemy2State extends IScriptAssetPluginState {
  gameURL: string;
}

class my2048 extends BaseScriptAssetPlugin<ILittleAlchemy2Props, ILittleAlchemy2State> {  
  constructor(props) {
    super(props);

    this.state = {

      // Change this URL to do magic. If the website doesn't load, then it means that it has disabled iframe requests. No way to fix that.
      gameURL: 'https://littlealchemy2.com/'

    };
  }

  changeGame = (newURL) => {
    this.setState({gameURL: newURL});
  }
  render() {
    // Display some basic information

    if (this.props.configMode) {
      return (
        <div>
          <h1> LITTLE ALCHEMY TWO </h1>

          <h3> How to Play: </h3>
          <p> 1. Open any .hx file.</p>
          <p> 2. Turn on the 2048 plugin.</p>
          <p> 3. Save the file, close it, then reopen it again.</p>
          <p> 4. You're playing Little Alchemy 2 now. </p>

          
        </div>

      );
    }
    return (
      <iframe src={this.state.gameURL} height={1000} width={1600}></iframe>
    );
  }
}

export default my2048;