import React from "react";

export default function CourseListRow(props) {

    if (props.isHeader) {
        if (!props.textSecondCell) {
            return (
                <tr>
                    <th colSpan={2}>{props.textFirstCell}</th>
                </tr>
            );
        }
        if (props.textSecondCell != null) {
            return (
              <tr>
                <th>{props.textFirstCell}</th>
                <th>{props.textSecondCell}</th>
              </tr>
            );
        }
    }
    else {
        <td>{props.textFirstCell} {props.textSecondCell}</td>
    }
}