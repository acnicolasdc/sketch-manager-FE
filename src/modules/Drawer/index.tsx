import React, { useContext } from "react";
import { useParams } from "react-router-dom";
/** @session */
import { SessionContext } from 'providers/session';
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
import GridModule from "./microModules/GridModule";
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
import { DrawerContainer, OptionHeader, DrawerContent, ContainerHeader, LabelStyle } from "./Drawer.style";
import UserInfo, { Data, MOCK_USER } from "../../components/UserInfo/index";


const Drawer: React.FunctionComponent = () => {
  const { width, height } = useWindowDimensions();
  const { getSession } = useContext(SessionContext);
  let { sketchId } = useParams();

  const [runModule, setRunModule] = React.useState<string>("");
  const [selectedId, selectShape] = React.useState<string>("");
  const [openReport, setOpenReport] = React.useState<boolean>(false);
  const [geratePDF, setGeneratePDF] = React.useState<boolean>(false);

  const printDocument = async () => {
    if (geratePDF) return;
    setGeneratePDF(true);
    const input: any = document.querySelector(".konvajs-content canvas:last-child");
    await documentGenerator(input);
    setGeneratePDF(false);
  };

  const closeModal = () => setRunModule("");
  const cancellReport = () => setOpenReport(false);

  const handlerHeader = (): Data => {
    const data = getSession();
    if (typeof data === 'object') {
      const { firstname, username, email } = data;
      return { firstname, username, email, ticketNumber: sketchId }
    }
    return MOCK_USER
  }
  
  return (
    <StoreProvider>

      <DrawerContainer>
        <OptionHeader>
<<<<<<< Updated upstream
          <LabelStyle>
            <UserInfo data={handlerHeader()}/>
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
=======
                <LabelStyle>
                  <UserInfo data={handlerHeader()}/>
                </LabelStyle>
                          <ContainerHeader>
                            {/* <StatefulTooltip
                              content={<p>Delete selected element</p>}
                              accessibilityType={"tooltip"}
                            >
                              <Button
                              kind={KIND.tertiary}
                                shape={SHAPE.square}
                                onClick={() => console.log(selectedId)}
                                overrides={{
                                  Root: {
                                    style: { marginRight: "15px" },
                                  },
                                }}
                                disabled={selectedId === ""}
                              >
                                <BsFillTrashFill />
                              </Button>
                            </StatefulTooltip> */}
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
>>>>>>> Stashed changes
        </OptionHeader>
        <DrawerContent>
          <OptionsBar
            height={height}
            onClick={(key: string) => setRunModule(key)}
            options={INITIAL_OPTIONS}
          />
          <LayerModule
            selectShape={selectShape}
            width={width}
            height={height}
            grid={<GridModule width={width} height={height} />}
          >
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
