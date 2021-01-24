import React, { useState } from 'react';
import PageHeader from '../../Components/PageHeader/pageHeader'

const DesignRecipe = () => {
    const [pageHeader, setpageHeader] = useState('Design a Recipe');

    return (
        <React.Fragment>
            <PageHeader pageHeader={pageHeader}/>
asda
        </React.Fragment>
    )
}

export default DesignRecipe;