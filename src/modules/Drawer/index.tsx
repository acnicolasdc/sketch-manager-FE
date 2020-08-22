import React from "react";
/** @microModules Functionality */
import ValveModule, { ValveModal } from "./microModules/ValveModule";
import DripModule, { DripModal } from "./microModules/DripModule";
import TextModule, { TextModal } from "./microModules/TextModule";
import ReducerModule, { ReducerModal } from "./microModules/ReducerModule";
import RectangleModule, {
  RectangleModal,
} from "./microModules/RectangleModule";
import CouplingModule, { CouplingModal } from "./microModules/CouplingModule";
import InformationModule from "./microModules/InformationModule";
import LayerModule from "./microModules/LayerModule";
import StoreProvider from "./providers/Store";
/** @components Presentantional Elements */
import { ChevronDown } from "baseui/icon";
import { Button, SHAPE, KIND } from "baseui/button";
import OptionsBar from "./components/OptionsBar";
import { StatefulTooltip } from "baseui/tooltip";
import { BsFillTrashFill, BsFileEarmarkArrowDown } from "react-icons/bs";
/** @utils Types, Enums and Styles */
import useWindowDimensions from "hooks/useWindowDimensions";
import { INITIAL_OPTIONS } from "./utils/assets";
import { ModulesEnum } from "./utils/_";
import documentGenerator from "./utils/printDocument";
import { DrawerContainer, OptionHeader, DrawerContent, ContainerHeader,LabelStyle } from "./Drawer.style";
import UserInfo from "../../components/UserInfo/index";

const Drawer: React.FunctionComponent = () => {
  const { width } = useWindowDimensions();
  const [runModule, setRunModule] = React.useState<string>("");
  const [selectedId, selectShape] = React.useState<string>("");
  const [openReport, setOpenReport] = React.useState<boolean>(false);
  const [geratePDF, setGeneratePDF] = React.useState<boolean>(false);

  const printDocument = async () => {
    if (geratePDF) return;
    setGeneratePDF(true);
    const input: any = document.querySelector(".konvajs-content > canvas");
    await documentGenerator(input);
    setGeneratePDF(false);
  };

  const closeModal = () => setRunModule("");
  const cancellReport = () => setOpenReport(false);

  return (
    <StoreProvider>
      <DrawerContainer>
        <OptionHeader>
                <LabelStyle>
                  {<UserInfo/>}
                </LabelStyle>
                          <ContainerHeader>
                            <StatefulTooltip
                              content={<p>Delete selected element</p>}
                              accessibilityType={"tooltip"}
                            >
                              <Button
                              kind={KIND.tertiary}
                                shape={SHAPE.square}
                                overrides={{
                                  Root: {
                                    style: { marginRight: "15px" },
                                  },
                                }}
                                disabled={selectedId === ""}
                              >
                                <BsFillTrashFill />
                              </Button>
                            </StatefulTooltip>
                            <StatefulTooltip
                              content={<p>¿Are you done? Save it as PDF for approval</p>}
                              accessibilityType={"tooltip"}
                            >
                              <Button
                              kind={KIND.tertiary}
                                shape={SHAPE.square}
                                disabled={geratePDF}
                                overrides={{ Root: { style: { marginRight: "5px" } } }}
                                endEnhancer={() => <BsFileEarmarkArrowDown />}
                                onClick={() => printDocument()}
                              >
                                {geratePDF ? "Generating..." : "Generate PDF"}
                              </Button>
                            </StatefulTooltip>
                            <StatefulTooltip
                              content={<p>Check the status of the report</p>}
                              accessibilityType={"tooltip"}
                            >
                              <Button
                              kind={KIND.tertiary}
                                endEnhancer={() => <ChevronDown size={24} />}
                                onClick={() => setOpenReport(true)}
                              >
                                Open Report
                              </Button>
                            </StatefulTooltip>
                          </ContainerHeader>
          
        </OptionHeader>
        <DrawerContent>
          <OptionsBar
            onClick={(key: string) => setRunModule(key)}
            options={INITIAL_OPTIONS}
          />
          <LayerModule selectShape={selectShape} width={width}>
            <RectangleModule selected={selectedId} selectRect={selectShape} />
            <TextModule selected={selectedId} selectText={selectShape} />
            <ValveModule selected={selectedId} selectValve={selectShape} />
            <DripModule selected={selectedId} selectDrip={selectShape} />
            <ReducerModule selected={selectedId} selectReducer={selectShape} />
            <CouplingModule
              selected={selectedId}
              selectCoupling={selectShape}
            />
          </LayerModule>
        </DrawerContent>
      </DrawerContainer>
      <RectangleModal
        isOpen={runModule === ModulesEnum.rect}
        cancell={closeModal}
      />
      <ValveModal
        isOpen={runModule === ModulesEnum.valve}
        cancell={closeModal}
      />
      <TextModal isOpen={runModule === ModulesEnum.text} cancell={closeModal} />
      <DripModal isOpen={runModule === ModulesEnum.drip} cancell={closeModal} />
      <ReducerModal
        isOpen={runModule === ModulesEnum.reducer}
        cancell={closeModal}
      />
      <CouplingModal
        isOpen={runModule === ModulesEnum.union}
        cancell={closeModal}
      />
      <InformationModule isOpen={openReport} cancell={cancellReport} />
    </StoreProvider>
  );
};

export default Drawer;
