import React, { useState } from 'react'
import Contextfile from './Contextfile';
function ContextBadge({children}) {
    
    let [badge, setBadge]= useState(0);
  return (
    <Contextfile.Provider value={{badge,setBadge}}>
        {children}
    </Contextfile.Provider>
  )
}

export default ContextBadge;