import React from 'react';
import Collapsible from './Collapsible';

// Section affichant des informations dépliables du logement
function CollapsibleSection({ logement }) {
    return (
        <div className="logement-collapsible">
            <Collapsible title="Description" content={logement.description} />
            <Collapsible title="Équipements" content={logement.equipments} />
        </div>
    );
}

export default CollapsibleSection;