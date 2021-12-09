import React, {useContext} from 'react';
import ContextList from "../ContextList";
import {getContextValues} from "../../../util";
import ErrorOccurrenceContext from "../../../contexts/ErrorOccurrenceContext";

export default function QueryString() {
    const errorOccurrence = useContext(ErrorOccurrenceContext);

    return (
        <ContextList items={getContextValues(errorOccurrence, 'request').queryString} />
    )
}
