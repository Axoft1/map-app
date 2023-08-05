import React, { Key } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";

import "./index.css";

import { IClaim, ITableColumnsType, ITableDataType } from "../../types";
import { RootState } from "../../store";

const columns: ITableColumnsType[] = [
  {
    title: "№",
    dataIndex: "idClaim",
    key: "idClaim",
    className: "fixed-column",
  },
  {
    title: "Название",
    dataIndex: "nameClaim",
    key: "nameClaim",
    className: "fixed-column",
  },
  {
    title: "Адрес погрузки",
    dataIndex: "departurePointName",
    key: "departurePoint",
    className: "fixed-column",
  },
  {
    title: "Адрес промежуточный",
    dataIndex: "intermediatePointName",
    key: "intermediatePoint",
    className: "fixed-column",
  },
  {
    title: "Адрес разгрузки",
    dataIndex: "arrivalPointName",
    key: "arrivalPoint",
    className: "fixed-column",
  },
];

const Route: React.FC = () => {
  const claims = useSelector((state: RootState) => state.main.claims);
  const dispatch = useDispatch();

  const dataSource: ITableDataType[] = claims.map((claim: IClaim) => ({
    key: claim.id,
    idClaim: claim.id,
    nameClaim: claim.name,
    departurePoint: claim.departurePoint,
    arrivalPoint: claim.arrivalPoint,
    intermediatePoint: claim.intermediatePoint,
    departurePointName: claim.departurePoint.name,
    arrivalPointName: claim.arrivalPoint.name,
    intermediatePointName: claim.intermediatePoint.name,
  }));

  const onRowSelect = (
    selectedRowKeys: Key[],
    selectedRows: ITableDataType[]
  ): void => {
    const rowData = claims.find((c) => c.id === selectedRows[0].idClaim);
    dispatch({ type: "saga/setSelectedClaim", payload: rowData });
  };

  return (
    <div className="table">
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        rowSelection={{ type: "radio", onChange: onRowSelect }}
      />
    </div>
  );
};

export default Route;
